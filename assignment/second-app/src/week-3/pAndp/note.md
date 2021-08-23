rules of hook
only call hook at the top level: call hook the same time as component render.
"useState, useEffect"
call hooks from reacts function components
call hooks from custom hooks
dont call hook inside loop, conditions or nested function
dont call hook from regular JS function

#props
- similar to an argument in function
- read-only in child component
- can be passed down to children
- cause a re-render when parent component updates the prop

#states
- used when a component needs to keep track of information that keep change
- creating within the component
- can be update using useState hook only (do not modify state directly)
- must be updated from the component that owns it
- can be passed down to children as props
- cause a re-render when change