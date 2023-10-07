---
layout: post
title: lua syntax doc
date: 2023-08-19 09:49:00
description: lua syntax summary
tags: lua language syntax
categories: tutorial
featured: true
giscus_comments: true
related_posts: false
toc:
  sidebar: left
---

<u>All example base on lua5.3</u>

## syntax

### data type

> All values in Lua are *first-class values*. This means that all values can be stored in variables, passed as arguments to other functions, and returned as results.

1. boolean

2. number

​			Represent both integer and real(floating-point) numbers

3. string

   - Represent immutable sequences of bytes
   - Strings can contain any 8-bit value, including embedded zeros('\0')
   - It makes no assumptions about the contents of a string
   - The raw string can be represented by using double brackets like ... , it starts with two consecutive left brackets, and end with the first encounter of two consecutive right brackets(use '\\]\\]' to represent if its not the end) or use "[=[]=]"(end with first encounter of "]=]")
   ```lua
   local str = [[\t\n\r\\'']]
   print(str)
   -- str = \t\n\r\\''
   local str = [[[[]-]-]]
   print(str)
   -- str = [[]-]-
   local str = [=[.[][]]].]=]
   print(str)
   -- str = .[][]]].
   ```

4. nil

   The type **nil** has only single value, **nil**, whose main property is to be different from any other value

   Both **nil** and **false** make a condition false while any other value makes it true

5. function

6. table

    The type table implements associative arrays

    The value with no explicit indicated index will be assigned an auto-incremented value from 1 as index by default like

    It calls **non-natural** key

    ```lua
    local tab = {1,2,i=3,j=nil}
    table.insert(tab,4)
    for k,v in pairs(tab) do
        print(k,v)
    end
    print(#tab,tab[3],tab["i"],tab.i,tab[100])
    --[[
    1       1
    2       2
    i       3
    3       4
    
    3       4       3       3       nil
    #tab	tab[3]	tab["i"]tab.i	tab[100]
    ]]
    ```

    Represent the **natural** key value first

    > Any key with value **nil** is not considered part of the table. Conversely, any key that is not part of a table has an associated value **nil**.

7. thread

    Coroutine

8. userdata


- Cant compare between different type

- Table, <del>function</del>, thread, and (full) user data values are objects: variables do not actually contain these values but only references to them which means assignment, parameter passing and function returns always manipulate references to such values and dont imply any kind of copy like

  ```lua
  local tab = {1,2}
  local tab2= tab
  tab2[1]=2
  print(table.unpack(tab))
  --2,2
  
  local tab = {1,2}
  local tab2= {1,tab}
  print(tab2[2][1])
  tab[1]=2
  print(tab2[2][1])
  -- 1,2
  
  --BUT
  local tab = {1,2}
  local tab2= tab
  tab2={3,3} -- it point to new table, maybe like rvalue reference
  print(table.unpack(tab))
  --1,2 
  ```
  

### operator

#### Bitwise Operators



#### Relational Operators

Lua supports the following relational operators:

- **`==`:** equality
- **`~=`:** inequality
- **`<`:** less than
- **`>`:** greater than
- **`<=`:** less or equal
- **`>=`:** greater or equal

These operators always result in **false** or **true**

Equality (`==`) first compares the type of its operands. If the types are different, then the result is **false**

Besides equality and inequality operators, cant compare between different type

Table, userdata, and thread are compared by reference (if they point to the same object)

#### Logical Operators

- **not**

    if **true** return **false**

    if **false** return **true**

- **and**

    <u>both **and** and **or** return one of these tow operands</u>

    a and b : return first **false** operands or the **b**

    1. if **a** == **false** , return **a** , (that is **false**)

    2. if **a** == **true** , return **b** , (it can be anything)

- **or**

    a or b : return first **true** operands or **b**

    3. if **a** == **true** , return **a** , (anything besides false and nil)

    4. if **a** == **false** , return **b** , (it can be anything)

This feature can help to achieve ternary operator

```lua
-- a?b:c
(a and b) or c
```

1. **a** == **false** return **c**
- if **a** == **false** , (a and b) return **a** = **false**(rule 1)
  
- if **(a and b)** == **false** return **c** (rule 4)
2. **a** == **true** return **b**
    - if **a** == **true** , return **b** (rule 2)
    - if **(a and b)** == **true** , return **(a and b)** = **b** (rule 3)

In the second case ,it need to make sure if **a** == **true** then **(a and b)** = **b** = **true** 

So we need to wrap **b** into something absolutely **true** like a object

```lua
((a and {b}) or {c})[1]
```

**c** was wrapped too to make a uniform format

<u>**false** represent logical false, not boolean false, both boolean false and nil represent logical false but false ~= nil</u>

#### Length Operators

 The length of a string is its number of bytes

> The length operator applied on a table returns a border in that table. A *border* in a table `t` is any natural number that satisfies the following condition:
> ```lua
> (border == 0 or t[border] ~= nil) and t[border + 1] == nil
> ```
> In words, a border is any (natural) index in a table where a non-nil value is followed by a nil value (or zero, when index 1 is nil).
> A table with exactly one border is called a **sequence**. 
>
> For instance, the table `{10, 20, 30, 40, 50}` is a sequence, as it has only one border (5). The table `{10, 20, 30, nil, 50}` has two borders (3 and 5), and therefore it is not a sequence. The table `{nil, 20, 30, nil, nil, 60, nil}` has three borders (0, 3, and 6), so it is not a sequence, too. The table `{}` is a sequence with border 0. 
>
> **Note that non-natural keys do not interfere with whether a table is a sequence.**
>
> When `t` is a sequence, `#t` returns its only border, which corresponds to the intuitive notion of the length of the sequence. When `t` is not a sequence, `#t` can return any of its borders. 
>
> (The exact one depends on details of the internal representation of the table, which in turn can depend on how the table was populated and the memory addresses of its non-numeric keys.)

experiment

```lua
tab = {nil,0,1,a=1,b={1,0},2,nil,nil,nil}
print(#tab)
-- 4
for i = 1,#tab do
	print(tab[i])
end
--[[
nil
0
1
2
]]
```

**#** count all the natural index value include the **nil** before last natural index value, to make sure it can use number between 1 and **#** as index

Like this, the last natural index value is **2** , and 4 value was counted include the first **nil**, as the quote say, its border contain 0 and 4

###  function

#### overload

Lua dont support function **overload** directly besides **metatable**, the same function name means **override** 

```lua
f = function (a,b)
	print(a,b)
end
f(1)
-- 1 nil
f = function (a)
	print(a)
end
f(1,2)
-- 1
```

#### parameter

> When a function is called, the list of arguments is adjusted to the length of the list of parameters

like

```lua
function f(a,b,c)
    print(a,b,c)
end
f(1)
f(1,2,3,4)
-- 1   nil  nil
-- 1   2    3

--or
function f(a,b,c)
    return a,b,c
end
print(f(1))
print(f(1,2,3,4))
-- same as above
print( (f(1,2,3,4)) )
-- 1
```

operator **()** maybe like

```lua
function f(a)
    return a
end
```

#### vararg

> vararg is indicated by three dots ('`...`') at the end of its parameter list. A vararg function does not adjust its argument list; instead, it collects all extra arguments and supplies them to the function through a *vararg expression*

some method to deal with "..."

1. select api

    ```lua
    function f(...)
        print(select("#",...))
        print(select(1,...))
        print(select(2,...))
    end
    f(1,2)
    --[[
    2
    1   2
    2
    ]]
    
    function f(a,...)
        print(select("#",...))
        print(select(1,...))
        print(select(2,...))
    end
    f(1,2,3)
    --[[
    2
    2   3
    3
    ]]
    
    function f(...)
        count = select("#",...)
        for i = 1,count do
            print( (select(i,...)) )
        end
    end
    f(1,2,3)
    --[[
    1
    2
    3
    ]]
    ```

    

2. pack

    Warp the *vararg* into a table and supply extra **n** to represent length

    ```lua
    function f(...)
        t = table.pack(...)
    	for k,v in pairs(t) do
    		print(k,v)
    	end
        print(table.unpack(t))
    end
    f(1,2,3)
    --[[
    1       1
    2       2
    3       3
    n       3
    1       2       3
    ]]
    
    table.pack(...)
    table.unpack(table,l,r)
    
    t = table.pack(1,2,3)
    a,b,c = table.unpack(t)
    ```

    Unpack return the element from the given list from l to r

3. {...}

    ```lua
    function f(...)
        t = {...} -- table , length = #t
        -- as same as table.pack(...) besides extra k-v n:#length
    end
    ```
    



#### closure

 When Lua precompiles a chunk, all its function bodies are precompiled too. Then, whenever Lua executes the function definition, the function is *closed*. This function *closure* is the final value of the expression

```lua
function f()
    local x=0 -- make it static
    return function()
        x=x+1
        print(x)
    end
end

t=f()
t()  -- 1
t()  -- 2

h=f()
h()  -- 1
h()  -- 2
```

#### iterator

The generic **for** statement works over functions, called *iterators*. 

The generic **for** loop has the following syntax:

```lua
for var1,var2, ..., varn in function() do
```

On each iteration, the iterator function is called to produce a new value, stopping when this new value is **nil**.

Note: only stop when the first value **var1** is **nil**

```lua
-- stop
function f()
    local index = 0
    return function()
        index = index + 1
        return (( index>2 and {nil} ) or {index})[1]
    end
end
for i in f() do
    print(i)
end
--[[
1
2
]]
-- pairs implement
-- ipairs implement
function m_ipairs(tab)
    local index = 0
    return function ()
        index = index + 1
		if index > #tab then
			return
		end
        return index, tab[index]
    end
end

tab={1,2,3,nil,4}
for i,v in m_ipairs(tab) do
    print(i,v)
end
--[[
1       1
2       2
3       3
4       nil
5       4
]]
function m_ipairs(tab)
    local index = 0
    return function ()
        index = index + 1
		if index > #tab or tab[index] == nil then
			return
		end
        return index, tab[index]
    end
end

tab={1,2,3,nil,4}
for i,v in m_ipairs(tab) do
    print(i,v)
end
--[[
1       1
2       2
3       3
]]
```


## orient-object

### metatable

> *metatable* is an ordinary Lua table that defines the behavior of the original value under certain special operations

We can overload the operation by set a metatable and define the metamethod below

- **`__add`:** the addition (`+`) operation. If any operand for an addition is not a <u>number (nor a string coercible to a number)</u>, Lua will try to call a metamethod

    First, Lua will check the first operand .

     If that operand does not define a metamethod for `__add`, then Lua will check the second operand. 

    If Lua can find a metamethod, it calls the metamethod with the two operands as arguments, and the result of the call (adjusted to one value) is the result of the operation. 

    Otherwise, it raises an error.

    And these below are similar to addition operation

    - **`__sub`:** the subtraction (`-`) operation. 
    - **`__mul`:** the multiplication (`*`) operation. 
    - **`__div`:** the division (`/`) operation.
    - **`__mod`:** the modulo (`%`) operation. 
    - **`__pow`:** the exponentiation (`^`) operation. 
    - **`__unm`:** the negation (unary `-`) operation.
    - **`__idiv`:** the floor division (`//`) operation.


  The result of the call is always converted to a boolean

- **`__band`:** the bitwise AND (`&`) operation. Behavior similar to the addition operation, if any operand is <u>neither an integer nor a value coercible to an integer</u> 

    - **`__bor`:** the bitwise OR (`|`) operation. 

    - **`__bxor`:** the bitwise exclusive OR (binary `~`) operation. 

    - **`__bnot`:** the bitwise NOT (unary `~`) operation. 

    - **`__shl`:** the bitwise left shift (`<<`) operation. 

    - **`__shr`:** the bitwise right shift (`>>`) operation. 

    - **`__concat`:** the concatenation (`..`) operation. 

    - **`__len`:** the length (`#`) operation.

         If the object is not a string, Lua will try its metamethod with the object as argument, and the result of the call (always adjusted to one value) is the result of the operation. 

        If there is no metamethod but the object is a table, then Lua uses the table length operation. Otherwise, Lua raises an error.


- **`__eq`:** the equal (`==`) operation. 

- **`__lt`:** the less than (`<`) operation.

- **`__le`:** the less equal (`<=`) operation.

    > Unlike other operations, the less-equal operation can use two different events. First, Lua looks for the `__le` metamethod in both operands, like in the less than operation. If it cannot find such a metamethod, then it will try the `__lt` metamethod, assuming that `a <= b` is equivalent to `not (b < a)`. 

like

```lua

local meta = {
	__add = function (tab1,tab2)
		-- as mentioned above, if you modify tab1/2 here, t1/2 will be modify
		-- assuming table is an array and same length
		local res = {}
		for i = 1, #tab1 do
			table.insert(res,tab1[i]+tab2[i])
		end
		return res
	end
}

local t1 = {1,2,3}
local t2 = {1,2,3}

setmetatable(t1,meta)
-- or setmetatable(t2,meta)
-- it will check both operands if one of them have metamethod
local r1 = t1 + t2
for k, v in pairs(r1) do
	print(k,v)
end
-- 1       2
-- 2       4
-- 3       6
meta.__sub = function (tab1,tab2)
	local res = {}
	for i = 1, #tab1 do
		table.insert(res,tab1[i]-tab2[i])
	end
	return res
end
local r2 = t1 - t2
for k, v in pairs(r2) do
	print(k,v)
end
-- 1       0
-- 2       0
-- 3       0
```

And threee fundamental metamethod below

- **`__index`**

     The indexing access operation `table[key]`

    When `key` is not present in `table`, then search in the __index in metatable
    
    If __index is a funcion , it is called with `table` and `key` as arguments, and result of the call (adjusted to one value) is the result of `table[key]` 
    
    ```lua
    local son = {a=1,b=2}
    
    local index = {
        a=3,
        b=4,
    	c=3,
    	d=4,
    }
    local father = {
    	-- __index = {
    	-- 	c = 3,
    	-- 	d = 4
    	-- }
    	__index = index
    }
    setmetatable(son, father)
    print(son.a) -- 1
    print(son.c) -- 3
    print( rawget(son,"d") ) -- nil
    ```
    
    And in other word, it's the implementation of derive in Lua
    
- **`__newindex`**

    The indexing assignment `table[key] = value`

    When `key` is not present in `table`, and it has a metatable with metamethod \__newindex , the value will be wrote in __newindex

    ```lua
    local son = {a=1,b=2}
    
    local index = {}
    local father = {
    __newindex = index
    }
    setmetatable(son, father)
    
    son["c"]=3
    print(son.c)    -- nil
    print(index.c)  -- 3
    --
    
    father.__index = index
    print(son.c)    -- 3
    print(index.c)  -- 3
    ```

    If __newindex is a funcion , it is called with `table` , `key`  and `value` as arguments, and \_\_newindex can call another metamethod
    
    ```lua
    father.__newindex = function(t,k,v)
        t[k]=v
    end
    son["d"]=4
    -- stack overflow
    -- call son["d"]=4 => father.__newindex(son,d,4)
    --   => son["d"]=4 => father.__newindex(son,d,4)
    --   ...
    father.__newindex = function(t,k,v)
        rawset(t,k,v)
    end
    son["d"]=4
    print(son.d)   -- 4
    print(index.d) -- nil
    ```
    
- **`__call`**

    The call operation `func(args)`

    ```lua
    father.__call = function (t,a,b)
    	t.a=a
    	t.b=b
    end
    son(3,4)
    print(son.a,son.b) -- 3  4
    ```


### method

A call `v:name(args)` is syntactic sugar for `v.name(v,args)`, except that `v` is evaluated only once

```lua
t = {
    id = 1,
    getId = function()
        return t.id
    end
}
print(t.getId())

t2 = t
t = nil
print(t2.getId()) -- nil
--[[
t  ---> | id = 1            |
t2 ---> | getId: return t.id|

t  -X-> | id = 1            |
t2 ---> | getId: return t.id|
						^
]]
```

with obj or self

```lua
t2.getIdObj = function (obj)
	return obj.id
end
print(t2.getIdObj(t2)) -- 1

function t2:getIdSelf()
	return self.id
end
print(t2:getIdSelf())  -- 1

t3 = t2 
t2 = nil
print(t3.getIdObj(t3)) -- 1
print(t3:getIdSelf())  -- 1
```



### derive

Through the above method, we achieved a part of **inherence**

Next remove the redundant tables through **self-index**

```lua
base = {
	print = function (self)
		for key, value in pairs(self) do
			print(key,value)
		end
	end
}
base.__index = base -- self-index

tab1 = {1,2,3}
tab2 = {a=1,b=2,c=3}

setmetatable(tab1,base)
setmetatable(tab2,base)

tab1:print()
-- 1       1
-- 2       2
-- 3       3
tab2:print()
-- a       1
-- b       2
-- c       3
```

Its order of execution is 

1. Search the `print` in tab1/2 and it's missing
2. Search its metatable's __index `base.__index`, that is itself
3. Search `base` and get the `print`

So if step 3 fails , it will try to search its upper metatable , the metatable of `base`

```lua
basebase = {
	id = 1
}
basebase.__index = basebase

base = {
    print = function (self)
		for key, value in pairs(self) do
			print(key,value)
		end
	end
}
base.__index = base
setmetatable(base,basebase)

tab1 = {1,2,3}
tab2 = {a=1,b=2,c=3}

setmetatable(tab1,base)
setmetatable(tab2,base)

print(tab1.id) -- 1

-- its key is that to setmetatable(base.__index, basebase)
-- if base.__index ~= base
index = {}
base.__index = index
setmetatable(index,basebase)
print(tab1.id) -- 1 still
```

{% mermaid %}
graph TB

subgraph t
tab1
tab2
end
subgraph self-index
subgraph base
base.__index
member
self
tab1 --> base.__index 
tab2 --> base.__index
end
base.__index --> self
subgraph basebase
member.
self.
self --> basebase.__index
end
basebase.__index --> self.
end
subgraph extra_index
subgraph index.
member..
index
end
base.__index -.-> index
index -.-> basebase.__index
subgraph index..
member...
index2
end
basebase.__index -.-> index2
end
{% endmermaid %}

### class

```lua
animal = {
	id = 0,
	name = "animal",
	new = function (self,obj)
		obj = obj or {}
		setmetatable(obj,self)
		return obj
	end,
	getId = function (self)
		return self.id
	end
}
animal.__index = animal

cat = animal:new({id = 1, name = "cat"})
print(cat:getId()) 	  -- 1
print(animal:getId()) -- 0
```

Encapsulate the `setmetatable` and it supports the initialization table

Then if inherent from cat , need to set `cat.__index = cat` or encapsulate it as well

```lua
animal = {
	id = 0,
	name = "animal",
	new = function (self,obj)
		obj = obj or {}
		setmetatable(obj,self)
		obj.__index = obj
		return obj
	end,
	getId = function (self)
		return self.id
	end,
	print = function (self, vis)
		vis = vis or {}
		for key, value in pairs(self) do
			if key ~= "__index" and vis[key] == nil then
				vis[key] = value					
				print(key,value)
			end
		end
		meta = getmetatable(self)
		if meta then
			meta:print(vis)
		end
	end
}
animal.__index = animal
cat = animal:new({id = 1, name = "cat"})

ragdollCat = cat:new({breed = "ragdollCat"})
ragdollCat:print()
-- breed   ragdollCat
-- id      1
-- name    cat
-- new     function: 0x56129d355770
-- getId   function: 0x56129d356260
-- print   function: 0x56129d3546b0
```

Lua dont support mutiple inherence owing to unique metatable

And it can simulate **class** by function

```lua
local function animal(name)
	local self = {
		id = 1,
		name = "animal"
	}
	if name ~= nil then
		self.name = name
	end
	function self:getname()
		print(self.name)
	end
	return self
end

local function cat(breed)
	local self = animal("cat")
	if breed ~= nil then
		self.breed = breed
	end

	function self:getbreed()
		print(self.breed)
	end
	return self
end

ragdollCat = cat("ragdollCat")

ragdollCat:getname()
ragdollCat:getbreed()
-- cat
-- ragdollCat

ragdollCat.name = "person"
ragdollCat:getname()
-- person

AshCat = cat("American shorthair Cat")
AshCat:getname()
AshCat:getbreed()
-- cat
-- American shorthair Cat
```

This method dont need to set anything like `__index` and `metatable` , because the last `self` returned is the same table as the first one in animal

The structure of two simulated class (Ignore the __index)

- First , implemented by **metatable**

    The relational structure with shared ancestor 

    ```mermaid
    graph TD
    subgraph ragdollCat
    breed. --'override'--> breed
    name. --'override'--> name
    subgraph cat
    subgraph animal
    id
    name
    getId
    new
    print
    end
    
    subgraph catself
    breed
    end
    end
    end
    
    animal --derive-->catself
    ```

- Second , implemented by **funcion**

    independent individual

    ```mermaid
    graph TB
    
    subgraph cat
    subgraph animal
    id
    name
    getName
    end
    breed
    getBreed
    end
    subgraph cat.
    subgraph animal.
    id.
    name.
    getName.
    end
    breed.
    getBreed.
    end
    ```
    
    This is because **cat** and **animal** are **function** rather than object , and each call to them returns a unique table containing the members defined within their own function bodies

### private

Through closure , it can simulate private member

```lua
function animal ()
    id = 1 -- private
    name = "animal" -- public
    function getId()
        return id;
    end
    return {
        getId = id,
        name = name
    }
end
a = animal()
print(a.id,a.name)
-- nil animal
```



## coroutine

Producer-consumer

```lua
local function consume()
	while true do
		local _,consu = coroutine.resume(producer)
		print(consu)
	end
end
local function produce()
	local i = 0
	while true do
		i = i + 1
		coroutine.yield(i)
	end
end

consumer = coroutine.create(consume)
producer = coroutine.create(produce)

coroutine.resume(consumer)
```

## other



### string

```lua

string.upper(string)
string.lower(string)
string.len(string)
string.reverse(string)
string.sub(string,begin,end<default>)
-- contain string[begin],string[end]
-- end need less than length

string.gsub(string,pattern,repl,maximum<default>)
-- replace all match the pattern to repl 
-- if maximum, replace at most maximum matched value

string.match
string.gmatch

string.find(string,pattern,init<default>,plain<default>)
-- return f,e = string.find
-- f,e = result.firstpos, result.endpos
-- init = find begin pos
-- plain= false regex default
--		= true close regex
-- if pattern = regex and with () capture parentheses
-- return f,e,cap

string.byte(string,begin<default>,end<default>)
-- ascii to char
-- if set begin end can convert and return more value

string.char(...(int))
-- char to ascii
```

### io

```lua
file = io.open(file_path)
io.input(file)
io.output(file)
io.read()
io.write()
--
file = io.open(file_path,"r+")
file:read("*all")
file:seek("end")
file:write("")
file:close()
-- 
for line in io.lines(file_path) do end
file = io.open(file_path,"r")
for line in file:lines() do end
```

