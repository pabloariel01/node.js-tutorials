solid

    S ingle responsability => 1 class 1 responsability
    O pen-closed => open to extension, closed to modification
    L iskov substitution => sustituability, use a subclass in palce of parent class and expect a similar behavoir (extends shoud not brake)
    Interface Segregation => class should not depend on methos that doenst need over generalization of interfaces
    D ependency inversion => clases should depen on abstractions nos concrete implementations

creational patters
    factory: interface for pre-configured objects
    builder: class with a base constructor and additional setter for extra poperties. simplifies a complex object creation process
    singleton single point of entry, only one instance of the class.
    for module.exports: the exported const(object) module works as singleton; when working with clases
        
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
            types
                singleton: 1 instance for all
                transient: 1 intance every time
                request: one instance per request scope

    decorators  
        applyed to: class, method, property, accessors

        decorator has three AggregationCursor, descriptor is de implementation

structural patters
    add responsabilities at runtime
    decorator: decorate a class with aditional responsabilities. wraps class with another with the same interface. that allows to be wrapped multiple times, modifing the base behavoir
    adapter: converts an interface to match the expected. object that matches the new required interface 
    facade: create an object that acts a a simplified version of a complex class
        ex: one method that needs result of many other methods

    composite
        for tree like data structures
        use same interface for nodes and leafs,a common method: for the leafs does the work, for the nodes it goupes its leafs work 
    proxi: sets a substitute object that controlls access and allows to perform operations before or after the requests gets to the object(logging,cahcing)


behavoiral patters
    strategy create a bunch of algorithms and make them interchangable
        interface for the client(context) accepts multiple strategies
    observer: allow define a subscription mechanism to notify changes to multiple objects
    command: define an object that will recive commands queue  and then execute them
    template : inheritance to delegate implementation responsability to subclasses. allows to alter the class flow by start()
    state: manage statas

    generators, have an asterisc function*. returns an iterator
            have yield keyword, and the alogrithm stops until next() is received. last value ruturns {value:undefined, done:true}. a generator returns an iterator object. can be iterated using for-await-of

    module design: for private scopes in js
        revealing module: hide privates inside a function scope. invoqued function only returns whats public
        for node with module.exports{} we choose what is visible