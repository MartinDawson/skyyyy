import rewire from "rewire"
import React from "react"
import ReactDOM from "react-dom"
const App = rewire("./App")
const mapStateToProps = App.__get__("mapStateToProps")
const mapDispatchToProps = App.__get__("mapDispatchToProps")
const mergeProps = App.__get__("mergeProps")
it('should render without crashing', () => {
  const div = document.createElement('div');

  const props = {
    getChatLog: jest.fn(),
    getUsers: jest.fn(),
    mappedMessages: [],
  }

  ReactDOM.render(
    <App.WrappedComponent {...props} />, div
  );
});

// @ponicode
describe("mapStateToProps", () => {
    test("0", () => {
        let object = [["Could not find an existing submission in location.  rubric is original.", "Message originator is not the grader, or the person being graded", "Connection is closed"], ["Could not find a submission object for message from xqueue", "Ran out of iterations", "TypeError exception should be raised"], ["Wait time out reached, while waiting for results", "Invalid data: No data found in any of the field(s)!!!", "Unknown Error"]]
        let callFunction = () => {
            mapStateToProps({ messages: object, members: "Anas" })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let object = [["To force deletion of the LAG use delete_force: True", "Error in retrieving email.", "Mock Error Message"], ["Sorry, The video you are looking for does not exist.", "The line-by-line profiler can only be used in dev.", "<error_message>%s</error_message>"], ["ValueError exception should be raised", "Grader id does not match submission id that was passed in", "Uploaded file was not added to the resource. "]]
        let callFunction = () => {
            mapStateToProps({ messages: object, members: "Michael" })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let object = [["Sorry, This video cannot be accessed via this website", "Counterparty sent error: %s", "Warning: "], ["Error in retrieving email.", "the specified credentials were rejected by the server", "TypeError exception should be raised"], ["Top level object in 'override.yml' needs to be an object", "Ran out of iterations", "There is a mismatch"]]
        let callFunction = () => {
            mapStateToProps({ messages: object, members: "Jean-Philippe" })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let object = [["New Error ", "No error", "Mock Error Message"], ["Could not find a grader object for message from xqueue", "Exception not raised: %s", "unexpected error"], ["The line-by-line profiler can only be used in dev.", "Unable to allocate address", "Warning: "]]
        let callFunction = () => {
            mapStateToProps({ messages: object, members: "Jean-Philippe" })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let object = [["Invalid Invitation Token.", "Invalid Invitation Token.", "Unable to allocate address"], ["No error", "Invalid Invitation Token.", "Wait time out reached, while waiting for results"], ["\n\nThe first error message:\n", "Wait time out reached, while waiting for results", "Error:"]]
        let callFunction = () => {
            mapStateToProps({ messages: object, members: "George" })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            mapStateToProps(undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("mapDispatchToProps", () => {
    test("0", () => {
        let callFunction = () => {
            mapDispatchToProps("REMOVE")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            mapDispatchToProps("install")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            mapDispatchToProps("assign")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            mapDispatchToProps({ type: "ADD_TODO" })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            mapDispatchToProps("discard")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            mapDispatchToProps(undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("mergeProps", () => {
    test("0", () => {
        let param2 = [[false, true, true], [true, true, false], [false, false, true]]
        let param3 = [[false, true, false], [true, true, false], [true, false, false]]
        let callFunction = () => {
            mergeProps({ messages: { map: () => "Jean-Philippe" }, members: { find: () => "Maurice Purdy" } }, param2, param3)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let param2 = [[false, false, true], [false, false, true], [false, false, true]]
        let param3 = [[false, true, false], [false, false, false], [false, true, true]]
        let callFunction = () => {
            mergeProps({ messages: { map: () => "Edmond" }, members: { find: () => "Becky Bednar" } }, param2, param3)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let param2 = [[false, false, false], [false, false, false], [false, false, false]]
        let param3 = [[true, true, false], [true, false, false], [false, false, true]]
        let callFunction = () => {
            mergeProps({ messages: { map: () => "Anas" }, members: { find: () => "Ronald Keeling" } }, param2, param3)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let param2 = [[false, true, true], [false, true, true], [false, false, true]]
        let param3 = [[true, false, true], [false, true, true], [true, false, true]]
        let callFunction = () => {
            mergeProps({ messages: { map: () => "Pierre Edouard" }, members: { find: () => "Gail Hoppe" } }, param2, param3)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let param2 = [[false, true, false], [false, true, true], [false, true, false]]
        let param3 = [[true, true, false], [true, false, true], [true, true, false]]
        let callFunction = () => {
            mergeProps({ messages: { map: () => "Pierre Edouard" }, members: { find: () => "Ronald Keeling" } }, param2, param3)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            mergeProps(undefined, undefined, undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})
