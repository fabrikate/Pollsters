class SessionsController < ApplicationController

  def attempt_login
    if params[:email].present? and params[:password].present?
      found_user = User.find_by_email params[:email]
      if found_user and found_user.authenticate params[:password]
        session[:user_id] = found_user.id
        redirect_to users_path, flash: {success: "Logged in!"}
      else
        redirect_to login_path, alert: "Invalid username / password"
      end
    else
      redirect_to login_path, alert:"Please enter a username and password"
    end
  end

  def logout
    session[:user_id] = nil
    redirect_to login_path, notice: "Logged out"
  end

end