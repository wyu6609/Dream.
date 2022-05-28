class CreateDreams < ActiveRecord::Migration[6.1]
  def change
    create_table :dreams do |t|
      t.references :user
      t.string :title
      t.string :description
      t.string :date
      t.timestamps
    end
  end
end
