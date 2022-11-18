import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

export interface CourseFileContent {
    course_id: string
    course_title: string
    course_description: string
}

export function getCourses(language: string) {

    const coursesDirectory = path.join(process.cwd(), 'courses');

    const courseDirectoryArray = fs.readdirSync(coursesDirectory + "/" + language);

    const courseFileContents = courseDirectoryArray.map(courseDirectory => {

        const courseIntroFilePath = path.join(coursesDirectory, language, courseDirectory, 'course-intro.mdx');

        const courseIntroFileContent = fs.readFileSync(courseIntroFilePath, 'utf8');

        const matterResult = matter(courseIntroFileContent);

        return {
            ...matterResult.data,
        }
    })

    return courseFileContents;
}