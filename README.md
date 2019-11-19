# README

## Useresテーブル
|Column|Type|Options|
|------|----|-------|
|email|string|null:false|
|password|string|null:false|
|username|string|null:false|
### Association
- has_many :group, through:  :groups_users

## groupテーブル
|Column|Type|Options|
|------|----|-------|
|name|text|null:false|
|p|string|null:false|
|username|string|null:false|
### Association
- has_many :user, through:  :groups_users

## groups_usersテーブル
|Column|Type|Options|
|------|----|-------|
|user_id|integer|null: false, foreign_key: true|
|group_id|integer|null: false, foreign_key: true|
### Association
- belongs_to :group
- belongs_to :user

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
### Association
- belongs_to :group through:  :groups_users
- belongs_to :user through:  :groups_users