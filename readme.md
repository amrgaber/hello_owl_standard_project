# Hello Owl Standard Project

This is a standard Owl project template. Follow these steps to set up and run the project:

1. **Install Dependencies**
   Run the following command in the project root directory:
   ```
   npm install
   ```
   This will install all the necessary dependencies listed in the `package.json` file.

2. **Development Mode**
   To run the project in development mode with hot-reloading:
   ```
   npm run dev
   ```
   This will start a development server at `http://localhost:3000`.

3. **Production Build**
   To create a production-ready build:
   ```
   npm run build
   ```
   This will generate optimized files in the `dist` directory.

4. **Running Tests**
   To run the test suite:
   ```
   npm test
   ```

5. **Project Structure**
   - `src/`: Contains the source code
   - `public/`: Contains static assets
   - `tests/`: Contains test files
   - `webpack.config.js`: Webpack configuration
   - `package.json`: Project metadata and dependencies

6. **Main Files**
   - `src/main.js`: Entry point of the application
   - `src/components/Root.js`: Root component of the Owl application
   - `public/index.html`: HTML template

7. **Customization**
   - Modify `src/components/Root.js` to change the root component
   - Add new components in the `src/components/` directory
   - Update `webpack.config.js` for any build process changes

Happy coding with Owl!
