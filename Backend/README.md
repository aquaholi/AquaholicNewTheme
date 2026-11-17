# AQSite PHP Backend

Open `http://localhost/AQSite/Backend/` in XAMPP.

Default local login:

- Username: `admin`
- Password: `admin`

Set `AQ_ADMIN_USER` and `AQ_ADMIN_PASSWORD` in the PHP/Apache environment before exposing the backend outside local development.

The backend reads the existing website sources and does not modify the Nuxt structure. It manages:

- `data/services.json` service cards
- every JSON project collection under `data/portfolios/`
- title and description fields in the existing service and industry detail headers

Every save creates a timestamped backup under `Backend/backups/`. The backend itself is isolated to this folder; website files are changed only after an administrator explicitly saves a form.
