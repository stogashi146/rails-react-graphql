# ・クエリの結果として返されるデータを表現する型
# ・データ取得の際にこれらのフィールドをクエリすることができる。

# frozen_string_literal: true

class ObjectTypes::Book < Types::BaseObject
  field :id, ID, null: false
  field :title, String
  field :created_at, GraphQL::Types::ISO8601DateTime, null: false
  field :updated_at, GraphQL::Types::ISO8601DateTime, null: false
end

