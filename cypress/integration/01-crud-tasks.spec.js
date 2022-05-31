const mainTitle = "Wellcome back, let's be productive today?"

const newTask = {
  title: 'This the newest and coolest task title',
  description:
    'The description of this task is amazing. This task should be on "Work" category.',
  date: '2022-05-19'
}

const updatedTask = {
  title: `This a changed task title ${new Date()}`,
  description: 'The description was simply changed',
  date: '2023-06-17'
}

describe('Create', () => {
  before(() => {
    cy.visit('/')
  })

  it('should be able to insert new task', () => {
    cy.get('[data-test="add-new-task-title"]').type(newTask.title)
    cy.get('[data-test="add-new-task-description"]').type(newTask.description)
    cy.get('[data-test="add-new-task-date"]').type(newTask.date)
    cy.get('[data-test="add-new-task-button"]').click()

    cy.intercept('POST', '/', {
      body: {
        operationName: 'createTask'
      }
    })
  })

  it(`should have new inserted task`, () => {
    cy.contains(newTask.title)
    cy.contains(newTask.description)
  })
})

describe('Read', () => {
  it('should be able to see tasks', () => {
    cy.get('[data-test="list-task"]').first()
  })
})

describe('Update', () => {
  it('should be able to update task', () => {
    cy.get('[data-test="list-task-edit"]').first().click()
    cy.get('[data-test="edit-task-completed"]').click()
    cy.get('[data-test="edit-task-title"]').clear().type(updatedTask.title)
    cy.get('[data-test="edit-task-description"]')
      .clear()
      .type(updatedTask.description)
    cy.get('[data-test="edit-task-date"]').clear().type(updatedTask.date)
    cy.get('[data-test="edit-task-button"]').click()
  })

  it(`should have updated task`, () => {
    cy.contains(updatedTask.title)
    cy.contains(updatedTask.description)
  })

  // it(`should be able to uncomplete task`, () => {
  //   cy.contains(updatedTask.title)
  //     .parentsUntil('[data-test="list-task"]')
  //     .find('[data-test="list-task-completed"]')
  //     .click()
  // })
})

describe('Delete', () => {
  it(`should be able to delete task`, () => {
    cy.contains(updatedTask.title)
      .parentsUntil('[data-test="list-task"]')
      .find('[data-test="list-task-delete"]')
      .click()
    cy.get('[data-test="delete-task-delete"]').click()
  })

  it(`should not be able to see deleted task`, () => {
    cy.contains(updatedTask.title).should('not.exist')
  })
})
