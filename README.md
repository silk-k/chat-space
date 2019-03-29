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


## membersテーブル

|Column|Type|Options|
|------|----|-------|
|users_id|integer|null: false, foreign_key: true|
|group_id|integer|null: false, foreign_key: true|

### Association
- belongs_to :group
- belongs_to :user

## usersテーブル

|Column|Type|Options|
|------|----|-------|
|users_id|integer|null: false, foreign_key: true|
|name|string|null: false, foreign_key: true|
|address|string|null: false, foreign_key: true|

### Association
- has_many :messages
- has_many :groups

## messagesテーブル

|Column|Type|Options|
|------|----|-------|
|messages_id|text|null: false, foreign_key: true|
|body|text|null: false, foreign_key: true|
|image|string|null: false, foreign_key: true|
|user_id|integer|null: false, foreign_key: true|
|group_id|integer|null: false, foreign_key: true|

### Association
- has_many :group
- has_many :users

## users_groupテーブル

|Column|Type|Options|
|------|----|-------|
|user_id|integer|null: false, foreign_key: true|
|group_id|integer|null: false, foreign_key: true|
|messages_id|text|null: false, foreign_key: true|

### Association
- has_many :group
- has_many :users
