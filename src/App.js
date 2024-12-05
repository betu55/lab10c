import React from "react";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>How I Built This Page Using React</h1>
      </header>
      <main>
        <section>
          <h2>Installation Process</h2>
          <p>
            To set up this project, I used the <code>create-react-app</code>{" "}
            command in my terminal. This allowed me to quickly scaffold a React
            application with zero configuration.
          </p>
          <p>
            I had Node.js installed but for anyone doing this from scratch{" "}
            <code>Node.js</code> must be installed on your system.
          </p>
          <div className="card">
            <p>
              This can be done in multiple ways but the common ones are:
              <ul>
                <li>
                  Using the{" "}
                  <a href="https://nodejs.org/en">official installer</a>
                </li>
                <li>Using the Node Version Manager (NVM)</li>
              </ul>
            </p>
          </div>
          <p>
            After installinf Node I ran the following command to create this
            app:
          </p>
          <pre>
            <code>npx create-react-app lab10-react</code>
          </pre>
        </section>

        <section>
          <h2>Building the Page</h2>
          <p>
            I edited the <code>App.js</code> file to include this content and
            styled it using the <code>App.css</code> file. React's
            component-based architecture made it easy to structure the page.
          </p>
        </section>

        <section>
          <h2>Challenges and Solutions</h2>
          <ul>
            <li>
              <b>Challenge:</b> Ensuring the page was responsive.
              <br />
              <b>Solution:</b> I used React's stateful components and CSS
              Flexbox for layout. I could've also used <code>Tailwind.css</code>{" "}
              for efficiency, especially because it gives us more control over
              styling our webpages compared to Bootstrap, Material and other
              simmilar frameworks.
            </li>
            <li>
              <b>Challenge:</b> Deploying the app.
              <br />
              <b>Solution:</b> I used Netlify for fast and easy deployment.
            </li>
            <li>
              <b>Challenge:</b> Runnig the app for the first time
              <br />
              <b>Solution:</b> I had an issue running the app for the first time
              as it didn't have a required module and got the error: <br />
              <br />
              <code
                style={{ color: "red", display: "inline-block", width: "55vh" }}
              >
                Module not found: Error: Can't resolve 'web-vitals' in
                '/Users/bemenets.bekele/Documents/TMU/Fall
                2024/CPS530/Lab10/lab10c-react/src'
              </code>
              <br />
              <br />
              but was able to solve it by using the command:{" "}
              <code>npm install web-vitals</code> in terminal.
              <br />
              <br />
              This is to show that when working with larger frameworks we need
              to keep an eye on dependencies, and isntall all the required ones.
              As the project becomes larger file/folder structures should also
              be considered.
            </li>
          </ul>
        </section>
      </main>
      <footer>
        <p>Built with React</p>
      </footer>
    </div>
  );
}

export default App;
