class ApplicationController < ActionController::Base
    inertia_share do
        { current_user: } if signed_in?
    end
end
