import React, { useContext } from "react";
import { GlobalStyle } from "./components/global/global.style";
import { theme } from "./components/global/theme.style";
import Home from "./routes/Home";
import RecipeDetails from "./routes/RecipeDetails";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { RecipesContextProvider } from "./context/recipesContext";
import { FormContext } from "./context/formContext";

const App = () => {
    const { addFormVisible, editFormVisible } = useContext(FormContext);
    return (
        <Router>
            <RecipesContextProvider>
                <ThemeProvider theme={theme}>
                    <GlobalStyle
                        noScrollAddForm={addFormVisible}
                        noScrollEditForm={editFormVisible}
                    />
                    <Switch>
                        <Route path="/" exact component={Home} />
                        <Route path="/:id" component={RecipeDetails} />
                    </Switch>
                </ThemeProvider>
            </RecipesContextProvider>
        </Router>
    );
};

export default App;
