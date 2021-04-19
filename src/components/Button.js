// Struktur dasar functional component di React

// Note: props bisa di-destruct seperti ini di dalam parameter
export default function Button({ title }) {
  // Ini contoh stateless component
  return (
    <button>
      { title }
    </button>
  )
}