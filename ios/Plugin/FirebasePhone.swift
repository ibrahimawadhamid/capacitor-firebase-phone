import Foundation

@objc public class FirebasePhone: NSObject {
    @objc public func echo(_ value: String) -> String {
        print(value)
        return value
    }
}
