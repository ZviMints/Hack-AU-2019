class course:
    def __init__(self,teacherName,courseName,courseCode,Time_end,Time_begin,points,day):
        self.teacherName=teacherName
        self.courseName=courseName
        self.courseCode=courseCode
        self.Time_begin=Time_begin
        self.Time_end=Time_end
        self.points=points
        self.day=day

    def myfunc(self):
        return "(" + self.teacherName + " , " + self.courseName + " , " + self.courseCode + " , " + str(self.Time_begin) + " , " + str(self.Time_end) + " , " + str(self.points) + " , " + self.day +")"




