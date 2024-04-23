import React from 'react'
import {Link} from 'react-router-dom';

export default function Footer() {
  return (
    <div className='p-10'>
      <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
    <div className="col-md-4 d-flex align-items-center">
      <Link to="/" className="mb-3 me-2 mb-md-0 text-muted text-decoration-none lh-1">
        <svg className="bi" width="30" height="24"><use xlink:to="#bootstrap"></use></svg>
      </Link>
      <span className="text-muted">Team  D O T</span>
    </div>

    <ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
      <li className="ms-3"><Link className="text-muted" to="/">Facebook</Link></li>
      <li className="ms-3"><Link className="text-muted" to="/">Twitter</Link></li>
      <li className="ms-3"><Link className="text-muted" to="/">LinkedIn</Link></li>
      <li className="ms-3">{" "}</li><li className="ms-3">{" "}</li>
    </ul>
  </footer>
    </div>
  )
}
