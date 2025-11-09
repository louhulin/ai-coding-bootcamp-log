// 创建闭包计数器函数
function createCounter(initialValue = 0) {
    // 私有变量，存储计数器的当前值，只能通过返回的方法访问
    let count = initialValue;
    
    // 返回一个包含三个方法的对象
    return {
        // increment方法：增加计数器值
        increment: function() {
            count++;  // 计数器值加1
            return count;  // 返回新的计数器值
        },
        
        // decrement方法：减少计数器值
        decrement: function() {
            count--;  // 计数器值减1
            return count;  // 返回新的计数器值
        },
        
        // getValue方法：获取当前计数器值
        getValue: function() {
            return count;  // 返回当前计数器值
        }
    };
}

// 演示闭包计数器的使用
console.log('=== 创建第一个计数器，初始值为5 ===');
const counter1 = createCounter(5);  // 创建计数器实例，初始值为5
console.log('初始值:', counter1.getValue());  // 输出初始值
console.log('增加一次:', counter1.increment());  // 增加并输出新值
console.log('再增加一次:', counter1.increment());  // 再次增加并输出新值
console.log('减少一次:', counter1.decrement());  // 减少并输出新值
console.log('最终值:', counter1.getValue());  // 输出最终值

console.log('\n=== 创建第二个计数器，初始值为10 ===');
const counter2 = createCounter(10);  // 创建另一个计数器实例，初始值为10
console.log('初始值:', counter2.getValue());  // 输出初始值
console.log('增加一次:', counter2.increment());  // 增加并输出新值
console.log('再增加一次:', counter2.increment());  // 再次增加并输出新值

console.log('\n=== 验证闭包特性：两个计数器状态独立 ===');
console.log('counter1当前值:', counter1.getValue());  // counter1的值保持不变
console.log('counter2当前值:', counter2.getValue());  // counter2的值独立变化

console.log('\n=== 创建第三个计数器，使用默认初始值0 ===');
const counter3 = createCounter();  // 创建计数器，使用默认初始值0
console.log('初始值:', counter3.getValue());  // 输出初始值
console.log('增加一次:', counter3.increment());  // 增加并输出新值
console.log('再增加一次:', counter3.increment());  // 再次增加并输出新值
console.log('减少一次:', counter3.decrement());  // 减少并输出新值
