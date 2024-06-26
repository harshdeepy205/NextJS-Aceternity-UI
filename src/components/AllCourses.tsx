"use client";

import Image from "next/image";
import React, { useState } from "react";
import { CardBody, CardContainer, CardItem } from "../components/ui/3d-card";
import Link from "next/link";
import courseData from "@/data/music_courses.json";

interface courseDataType {
	id: number;
	title: string;
	slug: string;
	description: string;
	price: number;
	instructor: string;
	isFeatured: boolean;
	image: string;
}

const AllCourses = () => {
	const [courses, setCourse] = useState(courseData.courses);
	const filterCourses = (value: string) => {
		let courses = courseData.courses.filter((course: courseDataType) =>
			course.title.toLowerCase().includes(value.toLowerCase())
		);
		setCourse(courses);
	};
	return (
		<div className="min-h-screen bg-black py-12 pt-36">
			<div className="flex justify-center sm:justify-between mx-4 sm:mx-16 flex-wrap text-center">
				<h1 className="text-lg md:text-6xl text-center font-sans font-bold mb-8 text-white">
					All courses ({courseData.courses.length})
				</h1>
				<div className="sm:mr-24">
					<input
						type="text"
						placeholder="Search"
						className="px-4 py-2 rounded-xl  dark:bg-white dark:text-black text-black text-2xl font-bold"
						onChange={(e) => filterCourses(e.target.value)}
					/>
				</div>
			</div>
			<div className="flex flex-wrap justify-center">
				{courses.map((course: courseDataType, index) => (
					<CardContainer className="inter-var mx-4 my-1" key={index}>
						<CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
							<CardItem
								translateZ="50"
								className="text-xl font-bold text-neutral-600 dark:text-white"
							>
								{course.title}
							</CardItem>
							<CardItem
								as="p"
								translateZ="60"
								className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
							>
								{course.description}
							</CardItem>
							<CardItem translateZ="100" className="w-full mt-4">
								<Image
									src={course.image}
									height="1000"
									width="1000"
									className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
									alt={course.title}
								/>
							</CardItem>
							<div className="flex justify-between items-center mt-20">
								<CardItem
									translateZ={20}
									as={Link}
									href="https://twitter.com/mannupaaji"
									target="__blank"
									className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
								>
									Try now →
								</CardItem>
								{/* <CardItem
									translateZ={20}
									as="button"
									className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
								>
									Sign up
								</CardItem> */}
							</div>
						</CardBody>
					</CardContainer>
				))}
			</div>
		</div>
	);
};

export default AllCourses;
