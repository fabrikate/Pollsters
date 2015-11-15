class SessionsController < ApplicationController

  def attempt_login
    if params[:email].present? and params[:password].present?
      found_user = User.find_by_email params[:email]
      puts found_user
      if found_user and found_user.authenticate params[:password]
        session[:user_id] = found_user.id
        render json: {success: "Login successful.", user: {id: found_user.id, email: found_user.email}}
      else
        render json: {error: "Invalid login."}
      end
    else
      render json: {error: "Please enter a username and password."}
    end
  end

  def logout
    session[:user_id] = nil
    render json: {message: "Logged out."}
  end

end