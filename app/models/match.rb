class Match < ApplicationRecord
  belongs_to :user

  def self.match_info
    matches = []
    all.each do |m|
      matches << {id: m.id, location: m.location, timeslot: m.timeslot, user2_id: m.user2_id, user_id: m.user_id, user_name: (m.user.first_name + " " + m.user.last_name[0])}
    end
    matches
  end

end
