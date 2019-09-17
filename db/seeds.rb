10.times do
  Department.create(
    name: Faker::Commerce.department
  )
  @department = Department.count
  5.times do
    Item.create(
      name: Faker::Commerce.product_name,
      price: Faker::Commerce.price.to_i,
      department_id: rand(1...@department)
    )
  end
end

puts "Data Seeded"