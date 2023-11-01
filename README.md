### Web Scraping Price Tracker Application with cron-job

#### Overview

The Scraprice project is a solution for tracking product prices on Amazon by scraping their details, storing the data in a MongoDB database, and sending email notifications to subscribed users whenever there are any changes to their products.

#### Technologies and Frameworks :

- **_Next.js_**
- **_TailwindCSS_**
- **_Mongoose_**
- **_Nodemailer_**
- **_Axios_**
- **_Cheerio_**

### Installation

Follow these steps to install and run the project:

1. **Clone the repository**

   Open your terminal and run the following command to clone the repository:

   ```bash
   git clone https://github.com/Shaclight69/scraprice_cron.git
   ```

2. **Navigate to the project directory**

   ```bash
   cd scraprice_cron
   ```

3. **Install the required packages**

   The project requires several packages to be installed. Run the following command to install them:

   ```bash
   npm i
   ```

4. **Set up the environment variables**

   The project requires the MONGODB_URI environment variable to be defined. You can do this in a `.env` file in the root of your project:

   ```bash
   MONGODB_URI=your_mongodb_uri
   ```

5. **Start the server**

   Run the following command to start the server:

   ```bash
   npm run start
   ```

Now, you should be able to access the project at `http://localhost:3000`.

Please note that the project requires the "m.media-amazon.com" domain to be accessible for image handling. If you are unable to access this domain, you may encounter issues with image loading.
