const jsonServer = require("json-server");
const server = jsonServer.create();
const middlewares = jsonServer.defaults();

// Set default middlewares (logger, static, cors and no-cache)
server.use(middlewares);

// To handle POST, PUT and PATCH you need to use a body-parser
server.use(jsonServer.bodyParser);

const players = [
  {
    id: 0,
    username: "harish.kulur",
    password: "secret",
    showEmailPhoneScreen: true,
    showTermsAndCondition: false,
    showWelcomeScreen: true
  },
  {
    id: 1,
    username: "johnny.mirkovic",
    password: "secret",
    showEmailPhoneScreen: false,
    email: "john.doe@comeon.com",
    phone: "46-700111000",
    acceptMarketing: false,
    showTermsAndCondition: true,
    showWelcomeScreen: false
  },
  {
    id: 2,
    username: "murat.bosnak",
    password: "secret",
    showEmailPhoneScreen: true,
    email: "john.doe@comeon.com",
    phone: "46-700111000",
    showTermsAndCondition: false,
    acceptMarketing: false,
    acceptTerms: true,
    showWelcomeScreen: false
  },
  {
    id: 3,
    username: "majid.parvin",
    password: "secret",
    showEmailPhoneScreen: false,
    email: "john.doe@comeon.com",
    phone: "46-700111000",
    showTermsAndCondition: false,
    acceptMarketing: true,
    acceptTerms: true,
    showWelcomeScreen: true
  }
];

const authenticate = (req, res, signup) => {
  const username = req.body.username;
  const password = req.body.password;
  const player = players.find(player => player.username === username);
  if (player && player.password === password) {
    const response = { ...player };
    delete response.password;
    res.status(200).json({
      status: "SUCCESS",
      response
    });
  } else if (!player && signup) {
    const newPlayer = {
      id: players.length,
      username,
      password,
      showEmailPhoneScreen: true,
      showTermsAndCondition: false,
      showWelcomeScreen: false
    };
    players.push(newPlayer);
    const response = { ...newPlayer };
    delete response.password;
    res.status(200).json({
      status: "SUCCESS",
      response
    });
  } else {
    res.status(401).json({
      status: "FAILURE",
      response: {
        errorKey: "INVALID_CREDENTIALS",
        errorDescription: "Invalid username and password"
      }
    });
  }
};

const playerAttributes = (req) => {
  let overrides = {}
  const { email, acceptTerms } = req.body
  if (email) {
    overrides = {
      showTermsAndCondition: true,
      showEmailPhoneScreen: false
    }
  } else if (acceptTerms) {
    overrides = {
      showTermsAndCondition: false,
      showEmailPhoneScreen: false,
      showWelcomeScreen: true
    }
  }

  return overrides
}

const updatePlayer = (req, res) => {
  const id = req.body.id;
  const playerIndex = players.findIndex(player => player.id === id);
  if (playerIndex > -1) {
    let newPlayer = { ...players[playerIndex], ...req.body };
    // Adding the override to let user navigate further
    const overrides = playerAttributes(req)
    newPlayer = {...newPlayer, ...overrides}
    players[playerIndex] = newPlayer;
    const response = newPlayer;
    delete response.password;
    res.status(200).json({
      status: "SUCCESS",
      response
    });
  } else {
    res.status(200).json({
      status: "FAILURE",
      response: {
        errorKey: "PLAYER_NOT_FOUND",
        errorDescription: "Player not found"
      }
    });
  }
};

server.use((req, res, next) => {
  if (req.method === "POST") {
    if (req.path === "/authenticate") {
      return authenticate(req, res);
    } else if (req.path === "/signup") {
      return authenticate(req, res, true);
    } else if (req.path === "/logout") {
      var username = req.body.username;
      if (username in players) {
        res.status(200).json({
          status: "SUCCESS"
        });
      } else {
        res.status(400).json({
          status: "FAILURE",
          error: "Username do not match!"
        });
      }
    }
  }
  if (req.method === "PUT") {
    if (req.path === "/player") {
      return updatePlayer(req, res);
    }
  }
  // Continue to JSON Server router
  next();
});

server.listen(3001, () => {
  console.log("JSON Server is running");
});
