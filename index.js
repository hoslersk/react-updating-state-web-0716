const app = "I don't do much.";

class ClickityClick extends React.Component {
  constructor() {
    super();

    // Define the initial state:
    this.state = {
      hasBeenClicked: false,
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    // Update our state here...
    this.setState({
      hasBeenClicked: true,
    });
  }

  render() {
    return (
      <div>
        <p>I have {this.state.hasBeenClicked ? 'not' : null} been clicked yet!</p>
        <button onClick={this.handleClick}>Click me!</button>
      </div>
    );
  }
}

// another example...

{
  theme: 'blue',
  addressInfo: {
    street: null,
    number: null,
    city: null,
    country: null
  },
}

this.setState({
  address: {
    city: 'New York City',
  },
});

// will result in...

{
  theme: 'blue',
  addressInfo: {
    city: 'New York City',
  },
}

// not what we want (overwrites objects that are not being changed)

// The following examples work well for 'deep' merging:

this.setState({
  addressInfo: Object.assign({}, this.state.addressInfo, {
    city: 'New York City',
  }),
});

// or in newer version...

this.setState({
  addressInfo: {
    ...this.state.addressInfo,
    city: 'New York City',
  }),
});

// Remember:
// Changes in state can only happen internally due to components changing their own state.
// Changes in props can only happen externally, due to changes in prop values being passed in.
