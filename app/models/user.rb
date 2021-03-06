class User < ApplicationRecord

  has_many :matches
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable



    has_attached_file :image, styles: { small: "64x64", med: "100x100", large: "200x200" },
    :default_url => ":style/missing.png"

    validates_attachment :image,
          content_type: { content_type: ["image/jpg", "image/jpeg", "image/png", "image/gif"] },
          size: { in: 0..10.megabytes }
    validates :first_name, presence: true
    validates :last_name, presence: true
    def name
      @name = first_name + " " + last_name
    end

    def name_initial
      @name_initial = first_name + " " + last_name[0]
    end

end
