import React, { useContext, useEffect, useState } from 'react'
import { auth, db } from '../firebase'
import { addDoc, collection } from 'firebase/firestore'

const AuthContext = React.createContext()

export function useAuth() {
    return useContext(AuthContext)
}

export const AuthProvider = ({ children }) => {

    const [currentUser, setCurrentUser] = useState()
    const [loading, setLoading] = useState(true)
    const userCollectionRef = collection(db, 'Users')

    function signup(email, password) {
        return (auth.createUserWithEmailAndPassword(email, password)
            .then(() => {
                return addDoc(userCollectionRef, { email, orders:[] })
            }))
    }

    function login(email, password) {
        return auth.signInWithEmailAndPassword(email, password)
    }

    function signout() {
        return auth.signOut()
    }

    const value = {
        currentUser,
        signup,
        login,
        signout
    }

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(user => {
            setCurrentUser(user)
            setLoading(false)
        })
        return unsubscribe
    }, [])

    return (
        <AuthContext.Provider value={value}>
            {!loading && children}
        </AuthContext.Provider>
    )
}