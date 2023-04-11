export const displayProducts = (req, res) => {
    // if the function also deals with a store id this can be used thrice
  res.send("<h1>product list</h1>");
}

export const clientProfile = (req, res) => {
  res.send("<h1>client profile</h1>");
}

export const createClientProfile = (req, res) => {
  res.send("<h1>create client profile</h1>");
}

