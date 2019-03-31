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


## groupテーブル

|Column|Type|Options|
|------|----|-------|
|name|string|null: false|

### Association
- has_many :messages
- has_many :users, through: :user_groups


## userテーブル

|Column|Type|Options|
|------|----|-------|
|name|string|null: false|
|password|string|null: false|

### Association
- has_many :messages
- has_many :groups,through: :user_groups

## messageテーブル

|Column|Type|Options|
|------|----|-------|
|body|text|null: false|
|image|string|
|user_id|integer|foreign_key: true|
|group_id|integer|foreign_key: true|

### Association
- belong_to :group,through: :user_group
- belong_to :users,through: :user_group

## user_groupテーブル

|Column|Type|Options|
|------|----|-------|
|user_id|references|foreign_key: true|
|group_id|references|foreign_key: true|

### Association
- belong_to :group
- belong_to :user
