Rails.application.routes.draw do
  devise_for :users
  root 'groups#index'
  resources :users, only: [:edit, :update]

  resources :groups, only: [:new, :create, :edit, :update] do
  resources :messages, only: [:index, :create]
  end
  rout 'users#index'
   resources :users, only: [:index] do
    collection do
      get  :ajax_user_list
    end
  end
end
