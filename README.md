# README

This README would normally document whatever steps are necessary to get the
application up and running.

Things you may want to cover:

* Ruby version

* System dependencies

* Configuration

* Database creation

* Database initialization

* How to run the test suite

* Services (job queues, cache servers, search engines, etc.)

* Deployment instructions

* ...


## groupsテーブル

|Column|Type|Options|
|------|----|-------|
|group_name|string|null: false, foreign_key: true|
|user_name|string|null: false, foreign_key: true|

### Association
- has_many :users, through: :users_group

## usersテーブル

|Column|Type|Options|
|------|----|-------|
|user_name|string|null: false, foreign_key: true|
|address|text|null: false, foreign_key: true|
|password|string|null: false, foreign_key: true|

### Association
- has_many :messages
- has_many :groups,through: :users_group

## messagesテーブル

|Column|Type|Options|
|------|----|-------|
|body|text|null: false|
|image|string|null: false|
|user_name|string|null: false, foreign_key: true|
|group_name|string|null: false, foreign_key: true|

### Association
- has_many :group,through: :users_group
- has_many :users,through: :users_group

## users_groupテーブル

|Column|Type|Options|
|------|----|-------|
|user_name|references|
|group_name|references|

### Association
- belong_to :group
- belong_to :user
