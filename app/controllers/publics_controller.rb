class PublicsController < ApplicationController
  def home
  end

  def about
  end

<<<<<<< HEAD
  def profile
    @user = current_user

  end

=======
  def update
    @user = current_user
    if params.has_key?(:skill_level)
      @user.update(skill_level: params[:skill_level])
      @user.save
      render "profile"
    else

    end
  end

  private
  def user_params
    params.permit(:skill_level)
  end


>>>>>>> 076650e6b17c58462f805c569b8abeaad84f2ff4
end
