describe('storybook-test', () => {
  beforeEach(() => cy.visit('/iframe.html?id=appcomponent--primary'));
  it('should render the component', () => {
    cy.get('storybook-test-root').should('exist');
  });
});