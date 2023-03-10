solid

    S ingle responsability => 1 class 1 responsability
    O pen-closed => open to extension, closed to modification
    L iskov substitution => sustituability, use a subclass in palce of parent class and expect a similar behavoir (extends shoud not brake)
    Interface Segregation => class should not depend on methos that doenst need over generalization of interfaces
    D ependency inversion => clases should depen on abstractions nos concrete implementations

loose couple
    as long as interfaces matches, swapping should be seamless
    testeable
    components independent

object pool
    pre initialized objects
    we dont create news, we use from the pool
    
Dependency injection
    Di container knows how to instantiate new instances of the dependencies
        di container is in charge of registering new services
            resolving dependencies

decorators  
    applyed to: class, method, property, accessors

    decorator has three AggregationCursor, descriptor is de implementation