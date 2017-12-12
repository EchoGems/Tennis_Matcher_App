class Match < ApplicationRecord
  belongs_to :user

  def self.match_info
    matches = []
    all.each do |m|
      if m.user2_id.blank?
        matches << {id: m.id, location: m.location, timeslot: m.timeslot, user2_id: m.user2_id, user_id: m.user_id, user_name: m.user.name_initial}
      else
        user2 = User.find(m.user2_id)
        matches << {id: m.id, location: m.location, timeslot: m.timeslot, user2_id: m.user2_id, user_id: m.user_id, user_name: m.user.name_initial, user2_name: user2.name_initial}
      end
    end
    matches
  end

end
