const Handlebars = require('handlebars')

Handlebars.registerHelper('getIcon', function (category, options) {
  return category === 'Household' ? `<i class="fas fa-home text-danger"></i>`
    : category === 'transportation' ? `<i class="fas fa-shuttle-van text-primary"></i>`
      : category === 'Entertainment' ? `<i class="fas fa-grin-beam text-purple"></i>`
        : category === 'Dining Out' ? `<i class="fas fa-utensils text-orange"></i>`
          : `<i class="fas fa-pen text-success"></i>`
})

Handlebars.registerHelper('isSelected', function (selectedOption, thisOption, options) {
  return (selectedOption === thisOption) ? 'selected' : ''
})

Handlebars.registerHelper('getDisplayDate', function (date, options) {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  return `${year}/${month}/${day}`
})

Handlebars.registerHelper('getInputDate', function (date, options) {
  if (!date) { return '' }
  const month = date.getMonth() === 11 ? 1 : date.getMonth() + 1
  return `${date.getFullYear()}-${month.toString().padStart(2, '0')}-${date.getDate().toString().padStart(2, '0')}`
})