
declare namespace Cypress {
    interface Chainable {
        /**
         * This function logs user in via backend
         * @param username string
         * @param password string
         */
        login(username: string, password: string): void;

        /**
         * This function registrete random user via backend
         * @param user object
         */
        register(user: object): void;

        /**
         * This function delete given user
         * @param username string
         * @param token string
         */
        delete(username: string, token: string): void;
    }
}
