class SessionsController < ApplicationController

  def attempt_login
    if params[:email].present? and params[:password].present?
      found_user = User.find_by_email params[:email]
      puts found_user
      if found_user and found_user.authenticate params[:password]
        session[:user_id] = found_user.id
        render json: {success: "Login successful.", user: {id: found_user.id, email: found_user.email}}
      else
        render json: {error: "Email or password is invalid."}
      end
    else
      render json: {alert: "Please enter a username and password."}
      # redirect_to login_path, alert:"Please enter a username and password"
    end
  end

  def logout
    session[:user_id] = nil
    render json: {message: "Logged out."}
    # redirect_to login_path, notice: "Logged out"
  end

end