import React, { createContext, useEffect, useState } from 'react'

import { auth, firebase } from './../services/firebase'

interface IUserProps {
  id: string
  name: string
  avatar: string
}

interface IAuthContextProps {
  signInWithGoogle: () => Promise<void>
  user: IUserProps | undefined
}

interface IAuthContextProviderProps {
  children: React.ReactNode
}

export const AuthContext = createContext({} as IAuthContextProps)

export const AuthContextProvider = ({ children }: IAuthContextProviderProps) => {
  const [user, setUser] = useState<IUserProps>()

  useEffect(() => {
    const unsubscribe =  auth.onAuthStateChanged(user => {
      if (user) {
        const { displayName, photoURL, uid } = user

        if (!displayName || !photoURL) {
          throw new Error('Missing information from Google account')
        }

        setUser({ id: uid, name: displayName, avatar: photoURL })
      }
    })

    return () => {
      unsubscribe()
    }
  }, [])

  const signInWithGoogle = async () => {
    const provider = new firebase.auth.GoogleAuthProvider()
    const result = await auth.signInWithPopup(provider)

    if (result.user) {
      const { displayName, photoURL, uid } = result.user

      if (!displayName || !photoURL) {
        throw new Error('Missing information from Google account')
      }

      setUser({ id: uid, name: displayName, avatar: photoURL })
    }
  }

  return (
    <AuthContext.Provider value={{
      signInWithGoogle,
      user
    }}>
      { children }
    </AuthContext.Provider>
  )
}
