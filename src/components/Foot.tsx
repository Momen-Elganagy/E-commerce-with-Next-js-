import React from 'react'

export default function Foot() {
  return (
    <footer className="footer sm:footer-horizontal footer-center bg-base-300 text-base-content p-4 w-full fixed bottom-0 left-0">
      <aside>
        <p>Copyright © {new Date().getFullYear()} - All right reserved by Momen Mohamed</p>
      </aside>
    </footer>
  )
}
