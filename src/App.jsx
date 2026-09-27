import './App.css'
import ContactList from './ContactList'
import data from './data.json'

function App() {

  return (
    <>
      <h1> Contact List </h1>
      <div className="contact-list">
        {data.map((contact) => (
          <ContactList key={contact.id} contactlist={contact} />
        ))}
      </div>
    </>
  )
}

export default App
