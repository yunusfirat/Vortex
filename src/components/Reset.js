import React from 'react'

export default function Reset() {
  return (
    <>
      <div className="container">
        <h1 style={{ fontSize: '2em' }}>Reset password</h1>
        <div className="row">
          <div className="col-md-12 col-sm-12 col-xs-12">
            <p>
              Enter your email address to get reset instructions sent to you.
            </p>
            <form method="post">
              <p>
                <label htmlFor="id_email">
                  Email:{' '}
                  <input type="email" name="email" id="id_email" required />
                </label>
              </p>
              <button className="btn btn-primary" type="submit">
                Submit
              </button>
            </form>
            <p>If you need any assistance please contact us on</p>
            <a href="mailto:support@ortex.com">support@ortex.com</a>
          </div>
        </div>
      </div>
      <footer>
        <div className="container">
          <div className="row">
            <div className="col-md-12"></div>
          </div>
        </div>
      </footer>
    </>
  )
}
