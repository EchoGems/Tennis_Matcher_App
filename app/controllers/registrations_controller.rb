class RegistrationsController < Devise::RegistrationsController


  private

  def sign_up_params
    params.require(:user).permit(:first_name, :last_name, :email, :image, :password, :password_confirmation)
  end

  def account_update_params
    params.require(:user).permit(:first_name, :last_name, :email, :image, :password, :password_confirmation, :current_password)
  end

  # def new
  #   render 'publics/profile.html.erb'
  # end
  def after_sign_up_path_for(resource)
    '/publics/profile'
  end
end
