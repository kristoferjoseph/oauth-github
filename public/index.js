(function init() {
  const authEl = document.getElementById('auth')
  const accountEl = document.getElementById('account')
  const avatarEl = document.getElementById('avatar')
  fetch('/auth')
    .then(response => response.json())
    .then(result => {
      let accountData = result.account
      let href = result.href
      authEl.innerHTML = accountData
        ? logout()
        : login(href)
      accountEl.innerHTML = accountData
        ? account(accountData)
        : accountEl.innerHTML
      avatarEl.innerHTML = avatar(accountData.avatar)
    })
    .catch(error => {
      console.error(error)
    })

  function account(data) {
    data = data || {}
    let name = data.name
    let username = data.login
    let github = data.url
    return `
  <div
    class="
      display-flex
    "
  >
    <span
      style="
        min-width: 5rem;
      "
    >
      Name
    </span>  <span
      style="font-weight: 100"
    >
      ${name}
    </span>
  </div>
  <div
    class="display-flex"
    style="
      margin-bottom: 1rem;
    "
  >
    <span
      style="
        min-width: 5rem;
      "
    >
      User
    </span>  <span
      style="font-weight: 100"
    >
      ${username}
    </span>
  </div>
  <!--
  <a
    href="${github}"
    style="
      color: var(--blue);
      text-decoration: none;
      text-align: center;
    "
  >
    GitHub Profile →
  </a>
  -->
    `
  }

  function avatar(src) {
    return `
   <img src="${src}" alt="User's avatar">
    `
  }

  function login(href) {
    return `
  <a
    href=${href}
    class="
      linear-gradient2
      font-size1
      color-light
    "
    style="
      padding-top: 1rem;
      padding-right: 3rem;
      padding-bottom: 1rem;
      padding-left: 3rem;
      font-size: 1.75rem;
      text-decoration: none;
      border-radius: 0.25rem;
      border: none;
      cursor: pointer;
    "
  >Login with GitHub</a>
    `
  }

  function logout() {
    return `
  <form
    method=POST
    action=/logout
    style="
      margin-top: 0.5rem;
    "
  >
    <button
      class="
        linear-gradient2
        color-light
      "
      style="
        padding-top: 1rem;
        padding-right: 3rem;
        padding-bottom: 1rem;
        padding-left: 3rem;
        font-size: 1.75rem;
        text-decoration: none;
        border-radius: 0.25rem;
        border: none;
        cursor: pointer;
      "
    >
      Logout
    </button>
  </form>
    `
  }
}())
