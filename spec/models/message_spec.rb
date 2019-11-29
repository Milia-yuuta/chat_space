require 'rails_helper'

RSpec.describe Message, type: :model do
  describe '#create' do
    context 'can save' do
      it 'is valid with content' do
        expect(build(:message)).to be_valid
       end

    end

    context 'can not save' do

    end
  end
end