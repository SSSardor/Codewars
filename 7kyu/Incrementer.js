function incrementer(nums) {
    res = []
    nums.map((num, index) => {
      num + (index + 1) > 9
        ? res.push((num + (index + 1)) % 10)
        :  res.push(num + (index + 1));
    })
    return res
  }