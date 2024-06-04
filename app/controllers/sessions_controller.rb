class SessionsController < ApplicationController
    def new
        render inertia: "Login", props: {
            name: "John Doe"
        }
    end
end