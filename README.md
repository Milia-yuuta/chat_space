# README

## usersテーブル
|Column|Type|Options|
|------|----|-------|
|email|string|null:false|
|password|string|null:false|
|username|string|null:false|
### Association
- has_many :groups, through:  :groups_users
- has many :groups_users
- has_many :chats

## groupsテーブル
|Column|Type|Options|
|------|----|-------|
|name|string|null:false|
### Association
- has_many :users, through:  :groups_users
- has_many :groups_users
- has_many :chats

## groups_usersテーブル
|Column|Type|Options|
|------|----|-------|
|user_id|integer|null: false, foreign_key: true|
|group_id|integer|null: false, foreign_key: true|
### Association
- belongs_to :group
- belongs_to :user
                  
## chatテーブル
|Column|Type|Options|
|------|----|-------|
|message|text||
|image|string||
|user_id|integer|null: false, foreign_key: true|
|group_id|integer|null: false, foreign_key: true|
### Association
- belongs_to :group 
- belongs_to :user 