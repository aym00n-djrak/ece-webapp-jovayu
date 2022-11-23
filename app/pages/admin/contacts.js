import { useState, useEffect } from 'react'
import { useUser, useSupabaseClient } from '@supabase/auth-helpers-react'

export default function Contacts({ session }) {
  const supabase = useSupabaseClient()
  const user = useUser()
  const [loading, setLoading] = useState(true)
  const [firstname, setFirstname] = useState(null)
  const [lastname, setLastname] = useState(null)
  const [email, setEmail] = useState(null)
  const [message, setMessage] = useState(null)


  useEffect(() => {
    getProfile()
  }, [session])

  async function getProfile() {
    try {
      setLoading(true)

      let { data, error, status } = await supabase
        .from('contacts')
        .select(`firstname, lastname, email,message`)
        .eq('id', user.id)
        .single()

      if (error && status !== 406) {
        throw error
      }

      if (data) {
        setFirstname(data.firstname)
        setLastname(data.lastname)
        setEmail(data.email)
        setMessage(data.message)
      }
    } catch (error) {
      alert('Error loading user data!')
      console.log(error)
    } finally {
      setLoading(false)
    }
  }

  async function updateProfile({ firstname, lastname, email,message }) {
    try {
      setLoading(true)

      const updates = {
        id: user.id,
        firstname,
        lastname,
        email,
        message,
        updated_at: new Date().toISOString(),
      }

      let { error } = await supabase.from('contacts').upsert(updates)
      if (error) throw error
      alert('Contact updated!')
    } catch (error) {
      alert('Error updating the data!')
      console.log(error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="items-center justify-center min-h-screen bg-gray-50 dark:bg-gray-900 sm:px-6 lg:px-8">
           <h1>Update your profile</h1>
      <div>
        <label htmlFor="email">Email</label>
        <input id="email" type="text" value={session.user.email} disabled />
      </div>

      <div>
        <label htmlFor="firstname">firstname</label>
        <input
          id="firstname"
          type="text"
          value={firstname || ''}
          onChange={(e) => setFirstname(e.target.value)}
        />
      </div>

      <div>
        <label htmlFor="lastname">lastname</label>
        <input
          id="lastname"
          type="text"
          value={lastname || ''}
          onChange={(e) => setLastname(e.target.value)}
        />
      </div>

      <div>
        <label htmlFor="email">email</label>
        <input
          id="email"
          type="email"
          value={email || ''}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>

      <div>
        <label htmlFor="message">message</label>
        <input
          id="message"
          type="message"
          value={message || ''}
          onChange={(e) => setMessage(e.target.value)}
        />
      </div>

      <div>
        <button
          className="button primary block"
          onClick={() => updateProfile({ firstname, lastname, email,message })}
          disabled={loading}
        >
          {loading ? 'Loading ...' : 'Update'}
        </button>
      </div>

      <div>
        <button className="button block" onClick={() => supabase.auth.signOut()}>
          Sign Out
        </button>
      </div>
    </div>
  )
}